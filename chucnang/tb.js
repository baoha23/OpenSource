function showNotification(message, type) {
    const notificationContainer = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.innerText = message;
    notificationContainer.appendChild(notification);
    setTimeout(function() {
      notification.classList.add('show');
      notification.classList.remove('hide');
    }, 100);
    setTimeout(function() {
      notification.classList.add('hide');
      notification.classList.remove('show');
      setTimeout(function() {
        notification.remove();
      }, 300);
    }, 3000);
  }
  