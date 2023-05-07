import type { Directive } from 'vue'
import tooltip from '@/directives/tooltip'

interface Directives {
  [key: string]: Directive
}

const directives: Directives = {
  tooltip
}

export default directives