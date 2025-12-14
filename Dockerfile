FROM alpine:latest

# Install ttyd and TUI applications
RUN apk add --no-cache \
    ttyd \
    bash \
    htop \
    mc \
    ncdu \
    vim \
    curl \
    git \
    tmux \
    nano

# Set bash as default shell
ENV SHELL=/bin/bash

# Create a non-root user for security
RUN adduser -D -s /bin/bash sandbox
USER sandbox
WORKDIR /home/sandbox

# Expose ttyd port
EXPOSE 8080

# Start ttyd with bash (use PORT env var for Render compatibility)
CMD ttyd -p ${PORT:-8080} -W bash
