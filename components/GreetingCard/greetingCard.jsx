const GreetingCard = ({ name }) => {
  return (
    <div className="flex flex-col gap-24">
      <span className="font-archivo brand">ShopGenie</span>
      <div className="font-bricolage flex flex-col">
        <span className="gray title-48">Welcome, {name} </span>
        <span>What are we buyin'?</span>
      </div>
    </div>
  )
}

export default GreetingCard
