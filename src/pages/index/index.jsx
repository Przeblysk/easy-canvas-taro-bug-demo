import React, { useState, useEffect, useRef } from 'react'
import Taro from '@tarojs/taro'
import { View, Canvas } from '@tarojs/components'
import EasyCanvasLayout from 'easy-canvas-layout'
import Styles from './index.module.less'

const Index = () => {
  const layout = useRef(null)

  useEffect(() => {
    const dpr = Taro.getSystemInfoSync().pixelRatio
    Taro.nextTick(() => {
      Taro.createSelectorQuery()
        .select('#myCanvas')
        .node((res) => {
          const canvas = res.node
          const ctx = canvas.getContext('2d')
          canvas.width = canvas.width * dpr
          canvas.height = canvas.height * dpr
          const containerWidth = 420
          const containerHeight = 336
          layout.current = EasyCanvasLayout.createLayer(ctx, {
            dpr,
            width: containerWidth,
            height: containerHeight,
            canvas,
          })
          const node = EasyCanvasLayout.createElement((c) => {
            return c('view', {}, [
              c(
                'view',
                {
                  styles: {
                    backgroundColor: 'rgba(116, 97, 255, 0.1)',
                    width: containerWidth,
                    height: containerHeight,
                    padding: [20, 16],
                    borderWidth: 1,
                    borderColor: 'rgba(116, 97, 255, 0.11)',
                    borderRadius: 8,
                  },
                  on: {
                    click(e) {
                      Taro.showToast({
                        title: '点击查看',
                      })
                    },
                  },
                  attrs: {
                    id: 'root',
                  },
                },
                [
                  c(
                    'view',
                    {
                      styles: {
                        backgroundColor: '#fff',
                        padding: [49, 15, 40, 15],
                        display: 'flex',
                        borderRadius: 16,
                        borderWidth: 1,
                        borderColor: 'rgba(231, 227, 255, 0.92)',
                      },
                    },
                    [
                      c('image', {
                        styles: {
                          width: 160,
                          height: 148,
                        },
                        attrs: {
                          src: 'https://img1.dxycdn.com/2020/1116/323/6398386778207187443-2.png',
                        },
                        on: {
                          load(info, img) {
                            console.log('logo', info, img)
                          },
                          error(error) {
                            console.log('logo', error)
                          },
                        },
                      }),
                      c(
                        'view',
                        {
                          styles: {
                            flex: 1,
                            paddingLeft: 30,
                          },
                        },
                        [
                          c(
                            'view',
                            {
                              styles: {
                                lineHeight: 54,
                                height: 54,
                              },
                            },
                            [
                              c(
                                'text',
                                {
                                  styles: {
                                    lineHeight: 44,
                                    marginRight: 10,
                                    fontSize: 44,
                                    fontWeight: 700,
                                    color: '#fd5155',
                                  },
                                },
                                `¥12`
                              ),
                            ]
                          ),
                          c(
                            'view',
                            {
                              styles: {
                                lineHeight: 30,
                                height: 30,
                                display: 'flex',
                              },
                            },
                            [
                              c(
                                'view',
                                {
                                  styles: {
                                    width: 'auto',
                                    padding: [0, 12],
                                    lineHeight: 28,
                                    borderRadius: 15,
                                    borderColor: '#FD5155',
                                    borderWidth: 1,
                                    backgroundColor: 'rgba(253, 98, 102, 0.08)',
                                    marginRight: 8,
                                  },
                                },
                                [
                                  c(
                                    'text',
                                    {
                                      styles: {
                                        fontSize: 20,
                                        fontWeight: 600,
                                        color: '#fd5155',
                                      },
                                    },
                                    `4人团`
                                  ),
                                ]
                              ),
                              c(
                                'text',
                                {
                                  styles: {
                                    fontSize: 22,
                                    color: '#9a9a9a',
                                    textDecoration: ['line-through'],
                                  },
                                },
                                `¥111`
                              ),
                            ]
                          ),
                          c(
                            'view',
                            {
                              styles: {
                                padding: [0, 31],
                                backgroundColor: '#fd6266',
                                lineHeight: 54,
                                borderRadius: 26,
                                color: '#fff',
                                fontSize: 24,
                                marginTop: 28,
                                textAlign: 'center',
                                width: 'auto',
                              },
                            },
                            [c('text', {}, '点击查看')]
                          ),
                        ]
                      ),
                    ]
                  ),
                  c(
                    'view',
                    {
                      styles: {
                        color: '#594eac',
                        marginTop: 22,
                        textAlign: 'center',
                        fontSize: 24,
                        opacity: 0.7,
                        lineHeight: 24,
                      },
                    },
                    [c('text', { styles: { lineHeight: 24 } }, '- copyright -')]
                  ),
                ]
              ),
            ])
          })
          node.mount(layout.current)
          console.log(node)
        })
        .exec()
    })
  }, [])

  return (
    <View className={Styles.wrapper}>
      <Canvas className={Styles.canvas} id='myCanvas' type='2d'></Canvas>
    </View>
  )
}

export default Index
