import React from "react"

const Star = ({ disabled = false }) => <span className="text-4xl text-yellow-300">{disabled ? '☆' : '★'}</span>

const Stars = ({ stars, total = 5 }) => <div className="flex flex-row select-none">{[...Array(total)].map((_, idx) => <Star disabled={idx + 1 > stars} />)}</div>;

export { Stars }