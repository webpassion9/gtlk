export function uploadFile() {
  const addFile = document.querySelector('.add-file__area');
  const fileInput = document.getElementById('fileInput');
  const uploadedFile = document.querySelector('.add-file__uploaded-items');
  const uploadingVisible = document.querySelector('.add-file__uploading-visible');
  let existingFileNames = [];

  if (!addFile || !fileInput || !uploadedFile || !uploadingVisible) {
    return;
  }

  function showUploading() {
    uploadingVisible.style.display = 'flex';
  }

  function hideUploading() {
    uploadingVisible.style.display = 'none';
  }

  function handleFiles(files) {
    const allowedFormats = ['doc', 'docx', 'xls', 'xlsx', 'pdf', 'jpg'];
    const fileNames = [];

    const uploadPromises = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileExtension = file.name.split('.').pop().toLowerCase();

      if (allowedFormats.includes(fileExtension)) {
        fileNames.push(file.name);

        const fileUploadPromise = new Promise((resolve) => {
          const xhr = new XMLHttpRequest();
          xhr.open('POST', 'upload_url', true);

          xhr.upload.addEventListener('progress', (e) => {
            if (e.lengthComputable) {
              const percentComplete = (e.loaded / e.total) * 100;
            }
          });

          xhr.addEventListener('load', () => {
            resolve();
          });

          xhr.send(file);
        });

        uploadPromises.push(fileUploadPromise);
      } else {
        alert('Неверный формат файла. Поддерживаемые форматы: doc, docx, xls, xlsx, pdf, jpg');
      }
    }

    if (fileNames.length > 0) {
      showUploading();

      Promise.all(uploadPromises).then(() => {
        existingFileNames = existingFileNames.concat(fileNames);
        uploadedFile.style.display = 'flex';
        uploadedFile.textContent = existingFileNames.join(', ');
        hideUploading();
      });
    }
  }

  if (addFile) {
    addFile.addEventListener('dragover', (e) => {
      e.preventDefault();
      addFile.classList.add('drag-over');
    });

    addFile.addEventListener('dragenter', (e) => {
      e.preventDefault();
      addFile.classList.add('drag-over');
    });

    addFile.addEventListener('dragleave', () => {
      addFile.classList.remove('drag-over');
    });

    addFile.addEventListener('drop', (e) => {
      e.preventDefault();
      addFile.classList.remove('drag-over');

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        handleFiles(files);
      }
    });
  }

  if (fileInput) {
    fileInput.addEventListener('change', () => {
      const files = fileInput.files;
      if (files.length > 0) {
        handleFiles(files);
      }
    });
  }
}
