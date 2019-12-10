import {shallowMount} from '@vue/test-utils'
import UserView from '@/views/UserView'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'

describe('UserView', () => {
  const build = () => {
    const wrapper = shallowMount(UserView)
    return {
      wrapper,
      userProfile: () => wrapper.find(VUserProfile),
      userSearchForm: () => wrapper.find(VUserSearchForm)
    }
  }

  it('render main wrapper ', () => {
    const {
      wrapper
    } = build()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('render child component from wrapper', () => {
    const {
      userProfile,
      userSearchForm
    } = build()
    expect(userProfile().exists()).toBe(true)
    expect(userSearchForm().exists()).toBe(true)
  })

  it('pass data from main to child', () => {
    const {
      wrapper,
      userProfile
    } = build()
    wrapper.setData({
      user: {
        name: 'matthew'
      }
    })
    expect(userProfile().vm.user).toBe(wrapper.vm.user)
  })
})