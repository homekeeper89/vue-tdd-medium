import {shallowMount} from '@vue/test-utils'
import VUserProfile from '@/components/VUserProfile'
import user from './fixtures/user'

describe('VUserProfile test', ()=>{
  let props

  const build = ()=>{
    const wrapper = shallowMount(VUserProfile, {
      propsData: props
    })
    return {
      wrapper,
      avatar : () => wrapper.find('.user-profile__avatar'),
      name : () => wrapper.find('.user-profile__name'),
      bio : () => wrapper.find('.user-profile__bio')
    }
  }

  beforeEach(() => {
    props = {
      user
    }
  })

  it('render main componets', ()=>{
    const {wrapper} = build();
    expect(wrapper.html()).toMatchSnapshot();
  })

  it('render three fields', ()=>{
    const {avatar, name, bio} = build();

    expect(avatar().exists()).toBe(true)
    expect(avatar().attributes().src).toBe(props.user.avatar__url)

    expect(name().exists()).toBe(true)
    expect(name().text()).toBe(props.user.name)
  })
})