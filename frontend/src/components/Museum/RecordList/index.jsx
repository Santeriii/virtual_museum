import React from 'react'

export default function RecordList({ records }) {
    return (
        <div>
            {records && (
                <>
                    {records.records.map(record => (
                        <p>{record.title}</p>
                    ))}
                </>
            )}
        </div>
    )
}