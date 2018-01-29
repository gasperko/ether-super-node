
export class Transaction {
  constructor (web3Transaction: any, block: any, transactionReceipt: any) {
    // block
    this.blockNumber = block.number
    this.timeStamp = block.timestamp
    this.blockHash = block.hash
    this.confirmations = block.confirmations
    // transaction
    this.hash = web3Transaction.hash
    this.nonce = web3Transaction.nonce
    this.transactionIndex = web3Transaction.transactionIndex
    this.from = web3Transaction.from
    this.to = web3Transaction.to
    this.value = web3Transaction.value
    this.gas = web3Transaction.gas
    this.gasPrice = web3Transaction.gasPrice
    this.input = web3Transaction.input
    // receipt
    this.isError = transactionReceipt.isError
    this.gasUsed = transactionReceipt.gasUsed
    this.cumulativeGasUsed = transactionReceipt.cumulativeGasUsed
    this.contractAddress = transactionReceipt.contractAddress
  }

  // block info
  blockNumber: number
  timeStamp: string
  blockHash: string
  confirmations: number

  // transaction
  hash: string
  nonce: number
  transactionIndex: number
  from: string
  to: string
  value: number
  gas: number
  gasPrice: number
  input: string

  // receipt
  contractAddress: string
  cumulativeGasUsed: number
  gasUsed: number
  isError: number
}
