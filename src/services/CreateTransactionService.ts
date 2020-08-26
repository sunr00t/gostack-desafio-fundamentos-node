import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Operation {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(title, type, value): Transaction {
    const operation = this.transactionsRepository.create({
      title,
      type,
      value,
    });
    return operation;
  }
}

export default CreateTransactionService;
