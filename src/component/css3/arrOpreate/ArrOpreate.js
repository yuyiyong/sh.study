import React from 'react';

const ArrOpreate = () => {

    const arr = [
        {
            id: 1, name: "xx1", parentId: 0,
            children: [
                {id: 2, name: "xx2", parentId: 1},
                {id: 3, name: "xx3", parentId: 1}
            ]
        },
        {
            id: 4, name: "xx4", parentId: 0,
            children: [
                {id: 5, name: "xx5", parentId: 4}
            ]
        },
        {
            id: 6, name: "xx6", parentId: 0,
            children: [
                {id: 7, name: "xx7", parentId: 6},
                {id: 8, name: "xx8", parentId: 6},
                {id: 9, name: "xx9", parentId: 6}
            ]
        }
    ];

    const opr = (checkedKeys) => {
        let result = arr.filter(item => {
            console.log(item);
            return item.id === 6;
            /*  for (let i in checkedKeys) {
                  if (checkedKeys[i].id === item.id) {
                      return true
                  }
              }*/
        });
        const mapResult = result.map(item=>item.parentId)
        return mapResult
    };
    const result = opr([{id: 5, name: "xx5", parentId: 4}, {id: 9, name: "xx9", parentId: 6},]);
    console.log("result", result);

    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const res = words.filter(words => words.length > 6)
    console.log("res", res);

    return (
        <div>ArrOpreate</div>
    )
};

export default ArrOpreate;
