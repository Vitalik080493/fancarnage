class Header {
  selectors = {
    root: '[data-js-header]',
    main: '[data-js-main]',
    body: '[data-js-body]',
    overlay: '[data-js-header-overlay]',
    burgerButton: '[data-js-header-burger-button]',
    form: '[data-js-header-form]',
    headerButton: '[data-js-header-button]',
    newsButton: '[data-js-header-news-button]',
    mainButton: '[data-js-header-main-button]',
    newsBlock: '[data-js-header-news-block]',
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.mainElement = document.querySelector(this.selectors.main)
    this.bodyElement = document.querySelector('body')

    this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
    this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)

    this.headerButtonElement = this.rootElement.querySelector(this.selectors.headerButton)
    this.formElement = this.rootElement.querySelector(this.selectors.form)

    this.newsButtonElement = this.rootElement.querySelector(this.selectors.newsButton)
    this.mainButtonElement = this.rootElement.querySelector(this.selectors.mainButton)
    this.newsBlockElement = this.mainElement.querySelector(this.selectors.newsBlock)
    
    this.heightMoveNewsBlockTop = this.newsBlockElement.offsetTop - this.rootElement.offsetHeight;
    
    this.selectNews = false;
    this.bindEvents()
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
    this.overlayElement.classList.toggle(this.stateClasses.isActive)
    document.documentElement.classList.toggle(this.stateClasses.isLock)
  }

  onHeaderButtonClick = () => {
    this.formElement.classList.toggle(this.stateClasses.isActive)
  }

  onScrollToNews = () => {
    let length = this.newsBlockElement.offsetTop - this.rootElement.offsetHeight
    window.scrollTo({
      top: length,
      left: 0,
      behavior: 'smooth'
    })
  }

  onScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  onScroll = () => {
    if(this.selectNews){
      if(scrollY < this.heightMoveNewsBlockTop){
        this.mainButtonElement.classList.add(this.stateClasses.isActive)
        this.newsButtonElement.classList.remove(this.stateClasses.isActive)
        this.selectNews = false;
      }
    }
    else{
      if(scrollY >= this.heightMoveNewsBlockTop){
        this.mainButtonElement.classList.remove(this.stateClasses.isActive)
        this.newsButtonElement.classList.add(this.stateClasses.isActive)
        this.selectNews = true;
      }
    }
    // console.log(scrollY);
  }

  bindEvents() {
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
    this.headerButtonElement.addEventListener('click', this.onHeaderButtonClick)
    this.newsButtonElement.addEventListener('click', this.onScrollToNews)
    this.mainButtonElement.addEventListener('click', this.onScrollTop)
    window.addEventListener('scroll', this.onScroll)
  }
}

export default Header
