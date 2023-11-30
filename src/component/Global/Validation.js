import Swal from 'sweetalert2';

export const showSuccessAlert = (message) => {
  Swal.fire({
    icon: 'success',
    text: message,
    timer: 1800,
    timerProgressBar: true,
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
  });
};

export const showRemoveAlert = (itemName, callback) => {
  Swal.fire({
    title: `Are you sure?`,
    text: `${itemName} will be removed.`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, remove it!',
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
      showSuccessAlert(`${itemName} has been removed.`);
    }
  });
};

export const showRemoveAlert2 = (itemName) => {
  showSuccessAlert(`${itemName} has been removed.`);
};

export const showAddDataAlert = (itemName, callback) => {
  Swal.fire({
    title: 'Add Data',
    text: `Do you want to add ${itemName}?`,
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, add it!',
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
      showSuccessAlert(`${itemName} has been added.`);
    }
  });
};

export const showSaveDataAlert = (itemName, callback) => {
  Swal.fire({
    title: 'Save Data',
    text: `Do you want to save ${itemName}?`,
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, save it!',
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
      showSuccessAlert(`${itemName} has been saved.`);
    }
  });
};

export const showCancelDataAlert = (itemName, callback) => {
  Swal.fire({
    title:'Please Add All Filds',
    icon: 'warning',
    timer: 1800,
    timerProgressBar: true,
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
      showSuccessAlert(`${itemName} has been canceled.`);
    }
  });
};

export const showDeleteDataAlert = (itemName, callback) => {
  Swal.fire({
    title: 'Delete Data',
    text: `Do you want to delete ${itemName}?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
      showSuccessAlert(`${itemName} has been deleted.`);
    }
  });
};

export const showCloseDataAlert = (itemName, callback) => {
  Swal.fire({
    title:'you never data added',
    icon: 'error',
    timer: 1800,
    timerProgressBar: true,
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
   
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
      showSuccessAlert(`${itemName} has been deleted.`);
    }
  });
}

