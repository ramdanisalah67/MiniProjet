import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';
export const routeTransitionAnimations = trigger('triggerName', [
 transition('One => Two, Two => Three,Three => Four,Four=>Five', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),query(':enter', [style({ right: '-100%', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
        query(':leave', [animate('500ms ease-out', style({ right: '100%', opacity: 0 }))]),
        query(':enter', [animate('500ms ease-out', style({ right: '0%', opacity: 1 }))])
       ]),
  ]),
  transition('Five=>Four,Four=>Three,Three => Two, Two => One', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({ left: '-100%', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('600ms ease-out', style({ left: '100%', opacity: 0 }))]),
      query(':enter', [animate('600ms ease-out', style({ left: '0%', opacity: 1 }))])
     ]),
     query(':enter', animateChild())
   ])
]);

/*
import {
    trigger ,
    transition,
    style,
    query,
    group,
    animateChild ,
    animate,
    keyframes
}from '@angular/animations'


//Basic
export const fader = trigger('routeAnimations',[
    transition('* <=> *',[
        query(':enter, :leave',[
             style ({
                position : 'absolute',
                left:0,
                width:'100%',
                opacity:0,
                transform:'scale(0) translateY(100%)',
             }),
        ]),
        query(':enter',[
            animate('600ms ease',
            style({opacity:1,transform:'scale(1) translateY(0)'})
            
            ),
        ])
    ])
])


//positioned
export const slider = 
    trigger('routeAnimations',[
        transition('* => isLeft',slideTo('left')),
        transition('* => isRight',slideTo('right')),
        transition('isRight => *',slideTo('left')),
        transition('isLeft => *',slideTo('right')),

    ])


function slideTo(direction:any){
    const optional = {optional:true};
    
    return [
        query(':enter , :leave',[
            style ({
                position:'absolute',
                top:0,
                [direction]:0,
                width:'100%'
            })
        ],optional),
        query(':enter',[
            style({[direction]:'-100%'})
        ]),
        group([
            query(':leave',[
                animate('600ms ease',style({[direction]:'100%'}))
            ],optional),
            query(':enter',[
                animate('600ms ease',style({[direction]:'0%'}))
            ])
        ])
    ];
}

*/