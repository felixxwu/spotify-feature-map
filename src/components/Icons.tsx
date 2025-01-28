import { styled } from 'goober'

const defaultContainer = styled('svg')``
type Container = typeof defaultContainer
export type Icon = ReturnType<typeof createIcon>
export interface IconProps<T> {
  color?: string
  size?: number
  container?: Container
  onClick?: () => T | Promise<T>
}

function createIcon<T>(path: string) {
  return ({
    color = 'white',
    size = 24,
    container: Svg = defaultContainer,
    onClick,
  }: IconProps<T>) => {
    return (
      <Svg
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        viewBox='0 0 24 24'
        onClick={onClick}
      >
        <path fill={color} d={path} />
      </Svg>
    )
  }
}

export const SemiCircle = createIcon(
  'M 18.0561 18.4839 c 0.579 -0.575 0.583 -1.5794 0.0086 -2.1584 c -0.5921 -0.5973 -1.5605 -0.6019 -2.1584 -0.0092 c -1.6791 1.6659 -4.0803 2.1349 -6.2679 1.2238 c -1.73 -0.721 -3.578 -2.526 -3.578 -5.4329 c -0 -2.4751 1.3658 -4.6048 3.5637 -5.5583 c 2.1475 -0.9312 4.5418 -0.5177 6.2478 1.0795 c 0.6145 0.575 1.5817 0.5429 2.1572 -0.0716 C 18.5818 6.9663 18.5486 5.9527 17.9576 5.4001 c -2.6091 -2.4413 -6.2679 -3.0735 -9.5487 -1.6504 c -3.3312 1.4443 -5.4014 4.6472 -5.4014 8.3581 c 0 3.6868 2.0902 6.848 5.4564 8.2505 C 11.8111 21.7515 15.4859 21.034 18.0561 18.4839 z'
)
export const LeftArrow = createIcon(
  'm10.978 14.999v3.251c0 .412-.335.75-.752.75-.188 0-.375-.071-.518-.206-1.775-1.685-4.945-4.692-6.396-6.069-.2-.189-.312-.452-.312-.725 0-.274.112-.536.312-.725 1.451-1.377 4.621-4.385 6.396-6.068.143-.136.33-.207.518-.207.417 0 .752.337.752.75v3.251h9.02c.531 0 1.002.47 1.002 1v3.998c0 .53-.471 1-1.002 1z'
)
export const NextArrow = createIcon(
  'M 18 19.5 v -15 h 1.5 v 15 h -1.5 z m -13.5 0 l 12 -7.5 l -12 -7.5 v 15 z'
)
export const PrevArrow = createIcon(
  'M 6 4.5 v 15 h -1.5 v -15 h 1.5 z m 13.5 0 l -12 7.5 l 12 7.5 v -15 z'
)
export const Play = createIcon(
  'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 18v-12l10 6-10 6z'
)
export const Pause = createIcon(
  'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17h-3v-10h3v10zm5 0h-3v-10h3v10z'
)
