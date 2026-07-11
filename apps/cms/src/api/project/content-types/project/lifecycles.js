const { Queue } = require('bullmq');

// Initialize Redis translation queue
const translationQueue = new Queue('translation-jobs', {
  connection: {
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: parseInt(process.env.REDIS_PORT || '6379')
  }
});

module.exports = {
  afterCreate(event) {
    const { result } = event;
    // Only queue translation if the saved locale is English
    if (result.locale === 'en') {
      translationQueue.add('translate-project', {
        id: result.id,
        title: result.title,
        data: result
      }, {
        attempts: 5,
        backoff: {
          type: 'exponential',
          delay: 1000
        }
      }).then(() => {
        console.log(`[Strapi Queue] Added translation job for project ID: ${result.id}`);
      }).catch(err => {
        console.error(`[Strapi Queue Error] Failed to queue translation for ID ${result.id}:`, err.message);
      });
    }
  },

  afterUpdate(event) {
    const { result } = event;
    if (result.locale === 'en') {
      translationQueue.add('translate-project', {
        id: result.id,
        title: result.title,
        data: result
      }, {
        attempts: 5,
        backoff: {
          type: 'exponential',
          delay: 1000
        }
      }).then(() => {
        console.log(`[Strapi Queue] Queued updated translation job for project ID: ${result.id}`);
      }).catch(err => {
        console.error(`[Strapi Queue Error] Failed to queue translation for ID ${result.id}:`, err.message);
      });
    }
  }
};
