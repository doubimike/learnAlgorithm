#include <stdio.h>
// int main()
// {
// 	int a[1001],n,i,t;
// 	for(i=1;i<=1000;i++)
// 		a[i]=0;
// 	scanf("%d",&n);
// 	for(i=1;i<=n;i++)
// 	{
// 		scanf("%d",&t);
// 		a[t]=1;
// 	}
// 	for(i=1;i<=1000;i++)
// 	{
// 		if(a[i]==1)
// 			printf("%d ",i );
// 	}
// 	return 0;
// }

int main()
{
	int a[101]={0},n,i,j,t;
	scanf("%d",&n);
	for(i=1;i<=n;i++)
	{
		scanf("%d",&a[i]);
	}
	for(i=1;i<=n-1;i++)
	{
		for(j=1;j<=n-i;j++)
		{
			if (a[j]>a[j+1])
			{
				t=a[j];a[j]=a[j+1];a[j+1]=t;
			}
		}
	}
	printf("%d ",a[1] );
	for(i=2;i<=n;i++)
	{
		if (a[i]!=a[i-1])
		{
		printf("%d ",a[i] );
		}
	}
	return 0;
}