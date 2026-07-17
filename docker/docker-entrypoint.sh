#!/bin/bash
set -e

# Cache configuration, routes, and views
echo "Caching configurations..."
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache

# Run migrations if enabled
if [ "${RUN_MIGRATIONS}" = "true" ]; then
    echo "Running database migrations..."
    php artisan migrate --force
fi

# Dynamically append SSR worker to supervisor config if enabled
if [ "${ENABLE_SSR}" = "true" ]; then
    echo "Enabling Inertia SSR..."
    cat <<EOF >> /etc/supervisor/conf.d/supervisord.conf

[program:inertia-ssr]
command=php artisan inertia:start-ssr
stdout_logfile=/dev/stdout
stdout_logfile_maxbytes=0
stderr_logfile=/dev/stderr
stderr_logfile_maxbytes=0
autorestart=true
EOF
fi

# Dynamically append queue worker to supervisor config if enabled
if [ "${ENABLE_QUEUE_WORKER}" = "true" ]; then
    echo "Enabling Laravel queue worker..."
    cat <<EOF >> /etc/supervisor/conf.d/supervisord.conf

[program:laravel-worker]
command=php artisan queue:work --verbose --tries=3 --timeout=90
stdout_logfile=/dev/stdout
stdout_logfile_maxbytes=0
stderr_logfile=/dev/stderr
stderr_logfile_maxbytes=0
autorestart=true
EOF
fi

echo "Starting Supervisor..."
exec "$@"
