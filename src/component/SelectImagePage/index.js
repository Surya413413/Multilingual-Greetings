import {CustomList, CustomImage} from './styledComponent'

const SelectImagePage = props => {
  const {selectImage} = props
  const {imageUrl, imageAltText} = selectImage
  return (
    <CustomList>
      <CustomImage src={imageUrl} alt={imageAltText} />
    </CustomList>
  )
}
export default SelectImagePage
