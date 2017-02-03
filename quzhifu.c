#include <stdio.h>

main()
{
	int a = 0;
	int wait;

	int *p = &a;

	printf("The value is: %d\n", *p);

	scanf("%d", &wait);
}
