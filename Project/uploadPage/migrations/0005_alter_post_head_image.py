# Generated by Django 4.2.4 on 2023-08-11 23:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('uploadPage', '0004_alter_post_head_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='head_image',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
    ]
