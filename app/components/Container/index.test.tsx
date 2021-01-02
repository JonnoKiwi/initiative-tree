import React from 'react'
import { makeStyles } from './index'
import { View } from 'react-native'
const view = (<View/>)
describe('Container', () => {
  describe('makeStyles()', () => {
    it('merges style', () => {
      const result = makeStyles({
        children: view,
        style: {
          backgroundColor: '#000',
          flexDirection: 'column'
        }
      })
      expect(result).toHaveProperty('backgroundColor', '#000')
      expect(result).toHaveProperty('flexDirection', 'column')
      expect(result).toHaveProperty('flex', 1)
    })
    it('sets width via props.width', () => {
      expect(makeStyles({ children: view, width: 350 })).toHaveProperty('width', 350)
    })
    it('sets height via props.height', () => {
      expect(makeStyles({ children: view, height: 350 })).toHaveProperty('height', 350)
    })
    test('space="between"', () => {
      expect(makeStyles({ children: view, space: 'between' }))
        .toEqual({
          flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          alignContent: 'center'
        })
    })
    test('space="around"', () => {
      expect(makeStyles({ children: view, space: 'around' }))
        .toEqual({
          flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          alignContent: 'center'
        })
    })
    test('space="evenly"', () => {
      expect(makeStyles({ children: view, space: 'evenly' }))
        .toEqual({
          flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          alignContent: 'center'
        })
    })
  })
})
