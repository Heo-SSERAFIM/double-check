# Generated by Django 4.2.4 on 2023-08-13 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('uploadPage', '0005_alter_post_head_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='target',
            field=models.CharField(max_length=400),
        ),
        migrations.AlterField(
            model_name='post',
            name='title',
            field=models.CharField(max_length=40),
        ),
    ]
