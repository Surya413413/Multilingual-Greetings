import {CustomSelectContainer, CustomButton} from './styledComponent'

const SelectItemPage = props => {
  const {select, isActive, changeTab} = props
  const {displayText, tabId} = select

  const CustomButtonColor = isActive ? 'active' : ''

  const onChangeText = () => {
    changeTab(tabId)
  }

  return (
    <CustomSelectContainer>
      <CustomButton value={CustomButtonColor} onClick={onChangeText}>
        {displayText}
      </CustomButton>
    </CustomSelectContainer>
  )
}
export default SelectItemPage
