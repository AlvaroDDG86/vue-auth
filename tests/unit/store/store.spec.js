import state from '@/store/state'
import actions from '@/store/actions'
import mutations from '@/store/mutations'

let url = ''
let body = {}

jest.mock('axios', () => ({
  defaults: {
    headers: {
      common: {
        Authorization: null
      }
    }
  },
  post: (_url, _body) => {
    return new Promise((resolve) => {
      url = _url
      body = _body
      resolve({
        data: {
          name: 'alice',
          email: 'uno@otro.es',
          token: 'xxxx'
        }
      })
    })
  }
}))

describe('Actions', () => {
  it('register user', async () => {
    const commit = jest.fn()
    const name = 'alice'
    const email = 'uno@otro.es'
    const password = 'password'

    await actions.register({ commit }, { name, email, password })

    expect(url).toBe('//localhost:3000/register')
    expect(body).toEqual({ name, email, password })
    expect(commit).toHaveBeenCalledWith('SET_USER_DATA', {
      name: 'alice',
      email: 'uno@otro.es',
      token: 'xxxx'
    })
  })
  it('login user', async () => {
    const commit = jest.fn()
    const email = 'uno@otro.es'
    const password = 'password'

    await actions.login({ commit }, { email, password })

    expect(url).toBe('//localhost:3000/login')
    expect(body).toEqual({ email, password })
    expect(commit).toHaveBeenCalledWith('SET_USER_DATA', {
      name: 'alice',
      email: 'uno@otro.es',
      token: 'xxxx'
    })
  })
})

describe('Mutations', () => {
  it('register user', async () => {
    const userRegistred = {
      name: 'alice',
      email: 'uno@otro.es',
      token: 'xxxx'
    }

    expect(state).toEqual({
      user: null
    })
    await mutations.SET_USER_DATA(state, { ...userRegistred })
    expect(state).toEqual({
      user: {
        name: 'alice',
        email: 'uno@otro.es',
        token: 'xxxx'
      }
    })
  })
})
