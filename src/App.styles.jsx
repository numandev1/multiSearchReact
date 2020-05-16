import styled from 'styled-components'
import LoadingOverlay from 'react-loading-overlay'

export const StyledLoader = styled(LoadingOverlay)`
  width: 100%;
  height: 100%;
  overflow: scroll;
  ._loading_overlay_overlay {
    position: fixed;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.5);
  }
  &.MyLoader_wrapper--active {
    overflow: hidden;
  }
`;