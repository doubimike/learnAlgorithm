#include <stdio.h>
// 冒泡排序
// int main()
// {
// 	int a[100],i,j,t,n;
// 	scanf("%d",&n);
// 	for(i=1;i<=n;i++)
// 		scanf("%d",&a[i]);
// 	for(i=1;i<=n-1;i++)
// 	{
// 		for(j=1;j<=n-i;j++)
// 		{
// 			if(a[j]<a[j+1])
// 			{
// 				t=a[j];
// 				a[j]=a[j+1];
// 				a[j+1]=t;
// 			}
// 		}
// 	}
// 	for(i=1;i<=n;i++)
// 	{
// 		printf("%d\n",a[i] );
// 	}
// }

struct student 
{
	char name[21];
	int score;
};

int main()
{
	struct student a[100],t;
	int i,j,n;
	scanf("%d",&n);
	for(i=1;i<=n;i++)
		scanf("%s %d",a[i].name,&a[i].score);
	for(i=1;i<=n-1;i++)
	{
		for(j=1;j<=n-1;j++)
		{
			if(a[j].score < a[j+1].score)
			{
				t=a[j];a[j]=a[j+1];a[j+1]=t;
			}
		}
	}
	for(i=1;i<=n;i++)
		printf("%s\n",a[i].name );
}