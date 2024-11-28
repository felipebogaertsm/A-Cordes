# Generated by Django 5.1.2 on 2024-11-28 02:57

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_alter_user_managers'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dealer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Dealer name')),
                ('profile_picture', models.ImageField(blank=True, null=True, upload_to='dealer_profile_pictures/', verbose_name='Profile picture')),
                ('description', models.TextField(blank=True, verbose_name='Description')),
                ('country_of_origin', models.CharField(blank=True, max_length=100, verbose_name='Country of origin')),
                ('contact_email', models.EmailField(blank=True, max_length=254, verbose_name='Contact email')),
                ('contact_phone', models.CharField(blank=True, max_length=15, verbose_name='Contact phone')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Updated at')),
                ('users', models.ManyToManyField(blank=True, related_name='dealers', to=settings.AUTH_USER_MODEL, verbose_name='Associated users')),
            ],
            options={
                'verbose_name': 'Dealer',
                'verbose_name_plural': 'Dealers',
                'ordering': ['-created_at'],
            },
        ),
    ]
