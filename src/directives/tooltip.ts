import type { DirectiveBinding } from 'vue'

interface TooltipDirectiveValue {
  text?: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding<TooltipDirectiveValue>): void {
    el.setAttribute('data-tooltip', `${binding.value?.text || binding.value}`)
    el.classList.add('with-tooltip')

    const position = binding.value?.position || getPositionClass(binding.modifiers)
    el.classList.add(`tooltip--${position}`)
  }
}

function getPositionClass(modifiers: Record<string, boolean>): string {
  switch (true) {
    case modifiers.top:
      return 'top'
    case modifiers.bottom:
      return 'bottom'
    case modifiers.left:
      return 'left'
    case modifiers.right:
      return 'right'
    default:
      return 'bottom'
  }
}
