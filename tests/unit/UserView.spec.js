jest.mock('@/store/actions')
import {shallowMount, createLocalVue} from '@vue/test-utils'
import initialState from '@/store/state'
import Vuex from 'vuex';
import actions from '@/store/actions'
import UserView from '@/views/UserView'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'
import userFixture from './fixtures/user'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('UserView', () => {
  let state
  const build = () => {
    const wrapper = shallowMount(UserView, {
      localVue,
      store : new Vuex.Store({state, actions})
    })
    return {
      wrapper,
      userProfile: () => wrapper.find(VUserProfile),
      userSearchForm: () => wrapper.find(VUserSearchForm)
    }
  }

  beforeEach(() => {
    jest.resetAllMocks()
    state = {...initialState}
  })

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

  it('pass data to child from store', ()=>{
    state.user = userFixture
    const {userProfile} = build()
    expect(userProfile().vm.user).toBe(state.user);
  })

  it('searches for a user when received "submitted"', ()=>{
    const expectedUser = "kuroski"
    const {userSearchForm} = build()

    userSearchForm().vm.$emit('submitted', expectedUser)

    expect(actions.SEARCH_USER).toHaveBeenCalled()
    expect(actions.SEARCH_USER.mock.calls[0][1]).toEqual({username:expectedUser})    
  })
})