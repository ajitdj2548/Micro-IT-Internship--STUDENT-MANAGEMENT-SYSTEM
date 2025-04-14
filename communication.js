// communication.js

document.addEventListener('DOMContentLoaded', () => {
  const sendMessage = document.getElementById('sendMessage');
  const messageBox = document.getElementById('messageBox');
  const messageList = document.getElementById('messageList');

  sendMessage.addEventListener('click', () => {
    const message = messageBox.value.trim();
    if (message !== '') {
      const li = document.createElement('li');
      li.innerHTML = `${message} <button onclick="removeMessage(this)">Delete</button>`;
      messageList.appendChild(li);
      messageBox.value = '';
    }
  });
});

function removeMessage(button) {
  button.parentElement.remove();
}
