#!/bin/bash
# ==============================================================================
# SideroHub Production Hardening: 4GB Swap Space Configuration Script
# Target OS: Ubuntu / Debian Linux on AWS EC2 (t4g.small ARM64)
# ==============================================================================

set -e

echo "[Swap Setup] Checking current swap status..."
if [ $(swapon --show | wc -l) -gt 0 ]; then
    echo "[Swap Setup] Swap is already active. Current swap configuration:"
    swapon --show
    exit 0
fi

echo "[Swap Setup] Creating a 4GB swapfile. Allocating blocks..."
# fallocate is fast and standard on modern ext4 file systems
sudo fallocate -l 4G /swapfile

echo "[Swap Setup] Restricting permissions to owner-only read/write (600)..."
sudo chmod 600 /swapfile

echo "[Swap Setup] Formatting swapfile block structures..."
sudo mkswap /swapfile

echo "[Swap Setup] Activating virtual swap memory space..."
sudo swapon /swapfile

echo "[Swap Setup] Adding configuration to /etc/fstab to persist through system reboots..."
if ! grep -q "/swapfile" /etc/fstab; then
    echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
fi

echo "[Swap Setup] Tuning virtual memory swappiness parameters..."
# Set swappiness to 10 (prefers physical RAM, writes to swap only when needed, optimal for SSDs)
sudo sysctl vm.swappiness=10
if ! grep -q "vm.swappiness" /etc/sysctl.conf; then
    echo 'vm.swappiness=10' | sudo tee -a /etc/sysctl.conf
fi

# Set cache pressure adjustment
sudo sysctl vm.vfs_cache_pressure=50
if ! grep -q "vm.vfs_cache_pressure" /etc/sysctl.conf; then
    echo 'vm.vfs_cache_pressure=50' | sudo tee -a /etc/sysctl.conf
fi

echo "[Swap Setup] SUCCESS. Swap memory is active and optimized for B2B production load!"
free -h
swapon --show
