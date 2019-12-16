import {shallowMount} from '@vue/test-utils'
import UserSearchForm from '@/components/VUserSearchForm'
import user from './fixtures/user'

describe('UserSearchForm', ()=>{
  const build = ()=>{
    const wrapper = shallowMount(UserSearchForm)

    return {
      wrapper,
      input:()=>wrapper.find('input'),
      button:()=>wrapper.find('button')
    }
  }

  it('render the component', ()=>{
    const {wrapper} = build()
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('render main, child component', ()=>{
    const {input, button} = build()
    expect(input().exists()).toBe(true)
    expect(button().exists()).toBe(true)
  })

  it('calls "submitted" event where submitting form', ()=>{
    const expectedUser = 'kuroski'
    const {wrapper, button, input} = build()
    input().element.value = expectedUser

    input().trigger('input')
    button().trigger('click')
    button().trigger('submit')

    expect(wrapper.emitted().submitted[0]).toEqual([expectedUser])
  })
})