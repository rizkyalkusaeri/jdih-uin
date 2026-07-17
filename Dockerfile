# Stage 1: Build assets using Node
FROM node:20-alpine AS assets-builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production PHP environment
FROM php:8.3-fpm-alpine

# Install system dependencies and build packages
RUN apk update && apk add --no-cache \
    nginx \
    supervisor \
    bash \
    nodejs \
    npm \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    libzip-dev \
    icu-dev \
    libxml2-dev \
    oniguruma-dev

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) \
        gd \
        pdo_mysql \
        bcmath \
        zip \
        intl \
        exif \
        opcache \
        pcntl

# Configure PHP & Nginx
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY docker/php.ini /usr/local/etc/php/conf.d/custom.ini

WORKDIR /var/www/html

# Copy application files (excluding files in .dockerignore)
COPY . .

# Copy compiled assets from builder stage
COPY --from=assets-builder /app/public/build ./public/build
COPY --from=assets-builder /app/bootstrap/ssr ./bootstrap/ssr

# Install composer dependencies
ENV COMPOSER_ALLOW_SUPERUSER=1
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader --no-scripts

# Set permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Setup entrypoint
COPY docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN sed -i 's/\r$//g' /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

EXPOSE 80

ENTRYPOINT ["docker-entrypoint"]
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
