
function toastFunc(toastItem){
    var ToastSetup =
    {
      toastComponent : toastItem,
      timeOut:6000,
      toastClass:"sds-toast",
      positionClass:"toast-bottom-left"
  }
    
    return ToastSetup;
}

export { toastFunc as toastFunc }