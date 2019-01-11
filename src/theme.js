import { grommet } from 'grommet'
import { deepMerge } from 'grommet/utils'

export const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#273d80",
      active: "light-5",
      placeholder: "dark-1"
    },
    font: {
      size: "16px",
      height: "20px"
    }
  }
})