export default class Global {

  isMobile() {
    const isMobile = false;
    if (window.innerWidth < window.innerHeight && window.innerWidth <= 768) {
      isMobile = true;
    }

    return { isMobile, window: { width: window.innerWidth, height: window.width } };
  }
}