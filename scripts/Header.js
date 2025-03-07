class Header {
  selectors = {
    root: '[data-js-header]',
    overlay: '[data-js-header-overlay]',
    burgerButton: '[data-js-header-burger-button]',
    form: '[data-js-header-form]',
    headerButton: '[data-js-header-button]',
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
    this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
    this.headerButtonElement = this.rootElement.querySelector(this.selectors.headerButton)
    this.formElement = this.rootElement.querySelector(this.selectors.form)
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

  bindEvents() {
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
    this.headerButtonElement.addEventListener('click', this.onHeaderButtonClick)
  }
}

export default Header
