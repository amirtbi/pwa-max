var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

async function openCreatePostModal() {
  createPostArea.style.display = 'block';
  if (deferredPrompt) {
    const x = await deferredPrompt.prompt();
    deferredPrompt.userChoice.then(function (choiceResult) {
      if (choiceResult.outcome === "accepted") {
        console.log("user accpeted installation");
      } else {
        console.log("user declined installation")
      }
    })
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);
