export type ImitatorAction = {
    prob: number;
    action: string
}
export const imitatorActions: ImitatorAction[] = [
    {prob: 30, action: 'nothing'},
    {prob: 60, action: 'add'},
    {prob: 80, action: 'update'},
    {prob: 100, action: 'remove'}
  ]