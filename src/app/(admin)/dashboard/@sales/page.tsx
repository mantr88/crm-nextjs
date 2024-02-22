import React from 'react';
import { getSummarySales } from '@/lib/api';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableHeader from '@/app/components/summary-table-header';
import SummaryTableCell from '@/app/components/summary-table-cell';
import DashboardCard from '@/app/components/dashboard-card';
import MagicButton from '@/app/components/magic-button';

export interface PageProps {}

export interface ISalesData {
  companyId: number;
  companyTitle: string;
  sold: number;
  income: number;
}

export default async function Page({}: PageProps) {
  const data: Promise<ISalesData[]> = getSummarySales();

  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {(await data).map(
          ({ companyId, companyTitle, sold, income }: ISalesData) => (
            <tr key={companyId}>
              <SummaryTableCell>{companyTitle}</SummaryTableCell>
              <SummaryTableCell align="center">{sold}</SummaryTableCell>
              <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
            </tr>
          ),
        )}
      </SummaryTable>
    </DashboardCard>
  );
}
