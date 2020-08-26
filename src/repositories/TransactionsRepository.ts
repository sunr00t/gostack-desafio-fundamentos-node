import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface Operation {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
  }

  public create({ value, title, type }: Operation): Transaction {
    const transaction = new Transaction({ value, title, type });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
