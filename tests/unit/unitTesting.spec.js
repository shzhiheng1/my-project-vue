// import { shallowMount } from '@vue/test-utils'
import UnitTesting from '@/views/experiment/unitTesting/index.vue'
// import Axios from 'axios'

describe('UnitTesting组件生成实例',()=>{
  it('text',()=>{
    expect(typeof UnitTesting.data().text).toBe('string')
  })
  it('list',()=>{
    expect(Array.isArray(UnitTesting.data().list)).toBeTruthy()
  })
})

// describe('添加',()=>{
//   it('添加数据',()=>{
//     const wrapper=shallowMount(UnitTesting)
//     wrapper.find('.add').trigger('click').then(()=>{
//       expect(wrapper.vm.list.length).toBeGreaterThan(UnitTesting.data().list.length)
//     })
//   })
// })

// describe('删', () => {
//   it('删除数据', () => {
//     const warp = shallowMount(UnitTesting);
//     warp.find('.del').trigger('click').then(()=>{
//       expect(warp.vm.list.length).toBeLessThan(UnitTesting.data().list.length);
//     });
//   });
// });

// describe('查', () => {
//   it('查询数据', async () => {
//     const warp = shallowMount(UnitTesting);
//     await warp.vm.getList()
//     expect(warp.vm.list.length).toBeGreaterThan(UnitTesting.data().list.length);
//   });
// });

// describe('检查接口', () => {
//   it('检查接口', async () => {
//     let { data } = await Axios.get('http://192.168.22.36:3000/unit')
//     expect(data.code).toBe(0)
//   });
// });

