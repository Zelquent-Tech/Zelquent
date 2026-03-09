// Service Worker for Zelquent Tech - Enhanced Version
const CACHE_NAME = 'zelquent-tech-v2'; // Increment version when updating
const OFFLINE_URL = '/offline.html';

// Assets to cache immediately on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/favicon-192x192.png',
  '/favicon-512x512.png',
  '/apple-touch-icon.png',
  '/manifest.json',
  '/src/main.jsx',
  '/src/assets/images/Zelquent-icon.png'
];

// Assets to cache after install (runtime caching)
const RUNTIME_CACHE_ASSETS = [
  '/src/assets/images/hero.jpg',
  '/src/assets/future-projects/future-project-1.png',
  '/src/assets/future-projects/future-project-2.png',
  '/src/assets/future-projects/future-project-3.png',
  '/src/assets/projects/project-image-1.png',
  '/src/assets/projects/project-image-2.png',
  '/src/assets/projects/project-image-3.png',
  '/src/assets/projects/project-image-4.png'
];

// Install event - precache critical assets
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Precaching app assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => {
        console.log('[Service Worker] Skip waiting on install');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('[Service Worker] Precaching failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[Service Worker] Claiming clients');
      return self.clients.claim();
    })
  );
});

// Fetch event - network-first for navigations, cache-first for assets
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Skip cross-origin requests
  if (url.origin !== self.location.origin) {
    return;
  }

  // Handle page navigations (HTML requests)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Cache the page for offline
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          console.log('[Service Worker] Serving offline page');
          return caches.match(OFFLINE_URL);
        })
    );
    return;
  }

  // Handle asset requests (images, JS, CSS) - cache-first strategy
  if (event.request.url.match(/\.(js|css|png|jpg|jpeg|svg|ico|json)$/)) {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          return fetch(event.request).then(networkResponse => {
            // Cache the fetched response
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
            return networkResponse;
          });
        })
        .catch(() => {
          // Return a fallback for images if offline
          if (event.request.url.match(/\.(png|jpg|jpeg|svg)$/)) {
            return caches.match('/favicon-192x192.png');
          }
          return new Response('Network error', { status: 408 });
        })
    );
    return;
  }

  // Default fetch behavior (network first, fallback to cache)
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.match(event.request);
      })
  );
});

// Background sync for offline form submissions (optional)
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form-sync') {
    console.log('[Service Worker] Background sync triggered');
    event.waitUntil(syncContactForms());
  }
});

// Function to sync offline contact forms
async function syncContactForms() {
  try {
    // Implement if you have offline form submission
    console.log('[Service Worker] Syncing contact forms');
  } catch (error) {
    console.error('[Service Worker] Sync failed:', error);
  }
}

// Handle push notifications (for future use)
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'New update from Zelquent Tech',
    icon: '/favicon-192x192.png',
    badge: '/favicon-192x192.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };

  event.waitUntil(
    self.registration.showNotification('Zelquent Tech', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});

// Message event for client communication
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});