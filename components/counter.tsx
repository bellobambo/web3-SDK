import React from 'react'
import { CONTRACT } from '../utils/constants'
import { TransactionButton, useReadContract } from 'thirdweb/react'
import { prepareContractCall } from 'thirdweb'

const Counter = () => {

    const { data, isLoading: loadingCount, refetch } = useReadContract({
        contract: CONTRACT,
        method: "getCount"
    })

    console.log('count', data)

    return (
        <div style={{ marginTop: "20px" }}>
            <h1>Counter</h1>
            {data?.toString()}
            {loadingCount ? (<h2>loading..</h2>) : (<h2>Count: {data?.toString()}</h2>)}


            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ marginTop: '20px' }}>
                    <TransactionButton
                        transaction={() => prepareContractCall({
                            contract: CONTRACT,
                            method: "decrement"
                        })}
                        onTransactionSent={() => console.log('Transaction decrementing')}
                        onTransactionConfirmed={() => refetch()}
                    >-</TransactionButton>


                    <TransactionButton transaction={() => prepareContractCall({
                        contract: CONTRACT,
                        method: "increment"
                    })}
                        onTransactionSent={() => console.log('Transaction increasing')}
                        onTransactionConfirmed={() => refetch()}

                    >
                        +
                    </TransactionButton>

                </div>
            </div>
        </div>
    )
}

export default Counter