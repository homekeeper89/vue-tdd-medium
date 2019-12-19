import { shallowMount} from '@vue/test-utils'
import VUserProfile from '@/components/VUserProfile'
import user from './fixtures/user'

describe('VUserProfile이 제대로 렌더 되는지 확인', ()=>{
  let props
  const build = ()=>{
    const wrapper = shallowMount(VUserProfile, {
      propsData:props
    })
    return {
      wrapper,
      avatar: ()=>wrapper.find('.user-profile__avatar'),
      name:()=>wrapper.find('.user-profile__name'),
      bio:()=>wrapper.find('.user-profile__bio')
    }
  }

  beforeEach(()=>{
    props = {
      user
    }
  })

  it('render main html', ()=>{
    const {wrapper} = build()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('render user template', ()=>{
    const
  })
})
