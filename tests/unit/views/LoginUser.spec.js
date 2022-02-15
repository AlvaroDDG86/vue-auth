import { shallowMount, createLocalVue } from '@vue/test-utils'
import LoginUser from '@/views/LoginUser'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const mockRouter = {
  push: jest.fn()
}

describe('RegisterUser', () => {
  let wrapper
  let actions
  let store
  beforeEach(() => {
    actions = {
      login: jest.fn(() => Promise.resolve(''))
    }
    store = new Vuex.Store({
      actions
    })
    wrapper = shallowMount(LoginUser, {
      store,
      localVue,
      mocks: {
        $router: mockRouter
      }
    })
  })
  test('should match with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('should register and navigate to dashboard', async () => {
    await wrapper.find('[name="email"]').setValue('alice@facebook.com')
    await wrapper.find('[name="password"]').setValue('111111')
    await wrapper.find('form').trigger('submit')
    expect(mockRouter.push).toHaveBeenCalled()
    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'dashboard' })
  })
})
