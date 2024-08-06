export const TicketData1 = {
  id: 1,
  csm_ticket_id: '123',
  estimated_tat: 1719168000,
  date_created: 1716355200,
  status: 1,
  date_modified: 1719014400,
  expected_user_action: ['message'],
  issue_type: 'Payment issue',
};

export const TicketData = {
  id: 2,
  csm_ticket_id: '123',
  estimated_tat: 1719168000,
  date_created: 1716355200,
  status: 2,
  date_modified: 1719014400,
  expected_user_action: ['message'],
  issue_type: 'Payment issue',
};

export const TicketData3 = {
  id: 3,
  csm_ticket_id: '123',
  estimated_tat: 1719168000,
  date_created: 1716355200,
  status: 3,
  date_modified: 1719014400,
  expected_user_action: ['message'],
  issue_type: 'Payment issue',
};
export const TicketData4 = {
  id: 4,
  csm_ticket_id: '123',
  estimated_tat: 1719168000,
  date_created: 1716355200,
  status: 4,
  date_modified: 1719014400,
  expected_user_action: ['message'],
  issue_type: 'Payment issue',
};
export const TicketData5 = {
  id: 5,
  csm_ticket_id: '123',
  estimated_tat: 1719168000,
  date_created: 1716355200,
  status: 5,
  date_modified: 1719014400,
  expected_user_action: ['message'],
  issue_type: 'Payment issue',
};

export const ActiveTicketsData = {
  data: [
    {
      created_at: 1722596567442,
      estimated_tat: '2024-07-25T17:47:13+05:30',
      id: '798aa2a4-0ca0-4869-8bfb-3a7e276bbc09',
      issue_type: 'Wallet Transactions (N)',
      status: 'IN_PROGRESS',
      ticket_id: '4304926',
    },
    {
      created_at: 1722596567442,
      estimated_tat: '2024-07-25T17:47:13+05:30',
      id: '798aa2a4-0ca0-4869-8bfb-3a7e276bbc09',
      issue_type: 'Wallet Transactions (N)',
      status: 'IN_PROGRESS',
      ticket_id: '4304926',
    },
  ],
  code: 'SUCCESS',
  message: '',
};

export const ResolvedTicketsData = {
  data: {
    previous:
      'http://localhost:3000/tickets?cursor=eyJUaW1lIjoiMjAyNC0wOC0wMlQxNjozMjo0Ny40NDIrMDU6MzAiLCJJRCI6Ijc5OGFhMmE0LTBjYTAtNDg2OS04YmZiLTNhN2UyNzZiYmMwOSJ9',
    next: null,
    results: [
      {
        closed_at: 1722596567442,
        created_at: 1722596567442,
        id: '798aa2a4-0ca0-4869-8bfb-3a7e276bbc08',
        issue_type: 'Wallet Transactions (N)',
        ticket_id: '4304926',
      },
      {
        closed_at: 1722596569442,
        created_at: 1722596567442,
        id: '798aa2a4-0ca0-4869-8bfb-3a7e276bbc09',
        issue_type: 'Wallet Transactions (N)',
        ticket_id: '4304926',
      },
      {
        closed_at: 1722596569442,
        created_at: 1722596567442,
        id: '798aa2a4-0ca0-4869-8bfb-3a7e276bbc07',
        issue_type: 'Wallet Transactions (N)',
        ticket_id: '4304926',
      },
    ],
    count: 1,
  },
  code: 'SUCCESS',
  message: '',
};
