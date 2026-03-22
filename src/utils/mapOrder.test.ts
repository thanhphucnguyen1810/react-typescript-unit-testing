import { mapOrder } from "./mapOrder";

describe("Unit test: mapOrder(): ", () => {
  it('Should return [] if originalArray is empty!', () => {
    expect(mapOrder(null as any, [1, 2, 3], 'id')).toEqual([])
  })

  it('Should return [] if key is falsy!', () => {
    expect(mapOrder([{ id: 1 }], [1], '')).toEqual([])
  })

  it('Should sort array by given order!', () => {
    const originalArray = [
      { id: 1, name: 'A' },
      { id: 3, name: 'C' },
      { id: 2, name: 'B' },
    ]
    const orderArray = [1, 2, 3]
    const result = mapOrder(originalArray, orderArray, 'id')
    expect(result.map(item => item.id)).toEqual([1, 2, 3])
  })

  it('Should push item not in orderArray to the end!', () => {
    const originalArray = [
      { id: 1, name: 'A' },
      { id: 3, name: 'C' },
      { id: 2, name: 'B' },
      { id: 4, name: 'D' },
      { id: 99, name: 'E' },
      { id: 100, name: 'F' },
    ]
    const orderArray = [1, 2, 3, 4]
    const result = mapOrder(originalArray, orderArray, 'id')
    // 99, 100 ko có trong orderArray nên bị đẩy về cuối
    expect(result.map(item => item.id)).toEqual([1, 2, 3, 4, 99, 100])
  })

  it('Should handle when all items are not in orderArray!', () => {
    const originalArray = [
      { id: 10 },
      { id: 20 },
      { id: 30 },
    ]
    const orderArray: number[] = []
    const result = mapOrder(originalArray, orderArray, 'id')
    // Tất cả item trong mảng originalArray ko có trong orderArray => giữ nguyên thứ tự gốc
    expect(result.map(item => item.id)).toEqual([10, 20, 30])
  })

  it('Should work with custom key!', () => {
    const originalArray = [
      { code: 'A', name: 'Alpha' },
      { code: 'C', name: 'Delta' },
      { code: 'D', name: 'Bravo' },
      { code: 'B', name: 'Charlie' },
    ]
    const orderArray = ['A', 'B', 'C', 'D']
    const result = mapOrder(originalArray, orderArray, 'code')
    expect(result.map(item => item.code)).toEqual(['A', 'B', 'C', 'D'])
  })
})


