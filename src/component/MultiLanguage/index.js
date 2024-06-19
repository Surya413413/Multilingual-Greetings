import {Component} from 'react'
import SelectItemPage from '../SelectItemPage'
import SelectImagePage from '../SelectImagePage'

import {
  CustomAppContainer,
  CustomPara,
  CustomUnorderList,
} from './styledComponent'

const Tablist = [
  {tabId: 'English', displayText: 'English'},
  {tabId: 'Tamil', displayText: 'Tamil'},
  {tabId: 'Telugu', displayText: 'Telugu'},
]

class MultiLanguage extends Component {
  state = {activeId: Tablist[0].tabId}

  changeTab = tabId => {
    this.setState({activeId: tabId})
  }

  getFilterImages = () => {
    const {languageGreetingsList} = this.props
    const {activeId} = this.state
    const filterImage = languageGreetingsList.filter(
      each => each.buttonText === activeId,
    )
    return filterImage
  }

  render() {
    const {activeId} = this.state
    const filterImages = this.getFilterImages()
    return (
      <CustomAppContainer>
        <CustomPara>Multilingual Greetings</CustomPara>
        <CustomUnorderList>
          {Tablist.map(each => (
            <SelectItemPage
              select={each}
              key={each.tabId}
              changeTab={this.changeTab}
              isActive={activeId === each.tabId}
            />
          ))}
          {filterImages.map(each => (
            <SelectImagePage selectImage={each} key={each.id} />
          ))}
         </CustomUnorderList>
      </CustomAppContainer>
    )
  }
}
export default MultiLanguage
