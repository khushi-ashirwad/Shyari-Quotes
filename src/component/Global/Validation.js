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

export const showRemoveAlert2 = (itemName) => {
  Swal.fire({
    icon: 'error',
    title:'your data has been deleted',
    timer: 1800,
    timerProgressBar: true,
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
  });
};

export const showDeleteDataAlert = (itemName, callback) => {
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
      Swal.fire({
        icon: 'error',
        text: `${itemName} has been removed.`,
        timer: 1800,
        timerProgressBar: true,
        toast: true,
        position: 'top-right',
        showConfirmButton: false,
      });
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

